<template>
  <div class="wrapper">
    <div class="inner-wrapper">
      <div class="hero">
        <div v-if="!tapped && !scanned" class="ctn">
          <h1><span>FYB-Dinner</span> ticket verification</h1>
          <div class="ctas">
            <primary-button name="Tap to verify" @action="tapped = true" />
          </div>
        </div>
        <div class="ctn" v-else-if="tapped && !scanned">
          <h2>Verify a ticket</h2>
          <div class="scanner-ctn" :class="[barcodeLoaded ? 'scanner-loaded' : '']">
            <StreamBarcodeReader
              @decode="onDecode"
              @loaded="onLoaded"
              @result="onResult"
            />
            <h3>Scan Barcode</h3>
          </div>
        </div>
        <div class="ctn" v-else-if="scanned && loading">
          <h2>Verifying...</h2>
        </div>
        <div class="ctn response-ctn" v-else-if="scanned && !loading">
          <div class="response" v-if="!ticketUsed">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_15398_16480)">
              <path d="M77.7097 10.9368C76.5328 9.75793 74.6233 9.7559 73.4464 10.9318L37.2757 47.0071L24.2254 32.8332C23.0977 31.6092 21.1911 31.5298 19.965 32.6573C18.7399 33.785 18.6614 35.6925 19.7891 36.9176L34.965 53.399C35.5208 54.0031 36.2986 54.3539 37.1188 54.3709C37.1408 54.3718 37.1621 54.3718 37.1832 54.3718C37.9802 54.3718 38.7469 54.0553 39.3118 53.4925L77.7038 15.2011C78.8836 14.0253 78.8857 12.1157 77.7097 10.9368Z" fill="#303237"/>
              <path d="M76.9848 36.9848C75.3195 36.9848 73.9698 38.3345 73.9698 40C73.9698 58.7317 58.7317 73.9698 40 73.9698C21.2694 73.9698 6.03016 58.7317 6.03016 40C6.03016 21.2694 21.2694 6.03016 40 6.03016C41.6653 6.03016 43.0152 4.68047 43.0152 3.01516C43.0152 1.34969 41.6653 0 40 0C17.9437 0 0 17.9437 0 40C0 62.0553 17.9437 80 40 80C62.0553 80 80 62.0553 80 40C80 38.3347 78.6503 36.9848 76.9848 36.9848Z" fill="#303237"/>
              </g>
              <defs>
              <clipPath id="clip0_15398_16480">
              <rect width="80" height="80" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          <h3>Welcome,  👋🏾 <span>{{ userData.fullname }}</span>, <br/>Let's party!!! 🎉🎉🎉</h3>
          </div>
          <div class="response" v-else>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5894_8475)">
                <path d="M30 60C13.4588 60 0 46.5412 0 30C0 13.4588 13.4588 0 30 0C46.5412 0 60 13.4588 60 30C60 46.5412 46.5412 60 30 60ZM30 3.75C15.525 3.75 3.75 15.525 3.75 30C3.75 44.475 15.525 56.25 30 56.25C44.475 56.25 56.25 44.475 56.25 30C56.25 15.525 44.475 3.75 30 3.75ZM39.6112 41.5312C39.1294 41.5312 38.6494 41.3475 38.2819 40.98L29.9944 32.6512L21.6675 40.9406C20.9306 41.67 19.7456 41.6663 19.0144 40.935C18.285 40.2 18.2869 39.0131 19.02 38.2819L27.3488 29.9944L19.0594 21.6675C18.33 20.9325 18.3319 19.7456 19.065 19.0144C19.8 18.2831 20.985 18.2869 21.7181 19.02L30.0056 27.3488L38.3325 19.0594C39.0675 18.3281 40.2525 18.3319 40.9856 19.065C41.715 19.8 41.7131 20.9869 40.98 21.7181L32.6512 30.0056L40.9406 38.3325C41.67 39.0675 41.6681 40.2544 40.935 40.9856C40.5675 41.3494 40.0894 41.5312 39.6112 41.5312Z" fill="#D73C27"/>
              </g>
              <defs>
                <clipPath id="clip0_5894_8475">
                  <rect width="60" height="60" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          <h3>Oops!, this ticket has already been used <br/>Please, contact support</h3>
          </div>
          <div class="ctas">
            <primary-button name="Verify another" @action="reset()" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { StreamBarcodeReader } from 'vue-barcode-reader'
export default {
  components: {
    StreamBarcodeReader
  },
  data () {
    return {
      userData: {},
      scanned: false,
      ticketUsed: false,
      verified: false,
      tapped: false,
      loading: false,
      barcodeLoaded: false
    }
  },
  methods: {
    reset () {
      this.scanned = false
      this.tapped = true
      this.ticketUsed = false
      this.verified = false
    },
    onLoaded () {
      this.barcodeLoaded = true
    },
    onDecode (val) {
      this.userData = JSON.parse(val)
      this.scanned = true
      this.loading = true
      const data = {
        complete_couple: this.userData.type !== 'regular'
      }
      const url = `https://fybdinner.fly.dev/admit/${this.userData.id}`
      axios.post(url, {
        data
      })
      .then(() => {
        this.verified = true
      })
      .catch((error) => {
        const {msg} = error.response.data
        this.ticketUsed = msg === 'this ticket has already been used'
      })
      .finally(()=>{
        this.loading = false
      })
      // fetch(url,
      // {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then(resp => resp.json())
      //   .then((data) => {
      //     if (!data.error) {
      //       if (data.message = 'this ticket has already been used') {
      //         this.ticketUsed = true
      //       } else {
      //         console.log(data)
      //       }
      //     } else {
      //       this.errorOccurred = true
      //     }
      //   })
    },
    onResult (val) {
    
    }
  }
}
</script>

<style scoped>
.wrapper {
  /* margin-top: 80px; */
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.inner-wrapper {
  /* background: rebeccapurple; */
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 80px
}

.hero {
  display: flex;
  flex-direction: column;
}

.hero h1,
.hero h1 span {
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
}

h3,
h3 span {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.5px;
  text-align: center;
}

.scanner-ctn h3 {
  color: #fff;
}

.hero h2 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -0.5px;
  text-align: center;
  margin-bottom: 10px;
}

.hero h1 span,
h3 span {
  white-space: nowrap;
}

.ctas {
  width: 100%;
  display: flex;
  gap: 20px;
  margin-top: 32px;
  justify-content: center;
}

.ctn {
  width: 500px;
  margin: 0 auto;
}

.ctas {
  margin-top: 100px;
}

.scanner-ctn {
  padding: 8px;
  border-radius: 8px;
}

.scanner-loaded {
  background: var(--dark-grey);
  border: 1 solid rgba(234, 234, 234, 0.25);
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.10), 0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
}

.scanner-ctn video {
  border-radius: 5px !important;
}

.response {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

@media(max-width: 500px) {
  .inner-wrapper {
    padding-top: 100px;
  }

  .hero {
    width: 100%;
  }
  .hero h1,
  .hero h1 span {
    font-size: 45px;
    width: 100%;
    text-align: center;
  }
  .ctas {
    flex-direction: column;
    align-items: center;
  }

  .ctas button {
    width: 100%;
  }

  .inner-wrapper {
    width: 100%;
  }

  .ctn {
    width: 100%;
    margin: 0 auto;
  }
}

@media(max-width: 300px) {
  .hero h1 span {
    white-space: pre-wrap;
  }
}
</style>
