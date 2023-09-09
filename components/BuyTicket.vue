<template>
  <div class="modal-wrapper">
    <div class="top">
      <h3>Buy FYB-Dinner tickets</h3>
      <p>Tickets Remaining: {{ remaining }}</p>
    </div>
    <div class="body">
      <div
        :class="['ticket-category', regular1 ? 'selected' : '']"
        @click="selectTicket('regular')"
      >
        <div class="icon">
          <img src="@/assets/images/ticket.png" alt="ticket">
        </div>
        <div class="ticket-body">
          <div class="ticket-body-top">
            <p>Regular (Solo ticket)</p>
            <p>₦5,000</p>
          </div>
          <div class="ticket-description">
            <p>
              This type of ticket will be used per person at entry. Select this
              ticket option and proceed.
            </p>
          </div>
        </div>
        <div class="ticket-sign">
          <input
            id="ticket-check"
            v-model="regular1"
            type="checkbox"
            name="check"
          >
          <span class="geekmark" />
        </div>
      </div>
      <div
        :class="['ticket-category', regular2 ? 'selected-green' : '']"
        @click="selectTicket('me-and-mine')"
      >
        <div class="icon">
          <img src="@/assets/images/green-ticket.png" alt="ticket">
        </div>
        <div class="ticket-body">
          <div class="ticket-body-top">
            <p>Me and Mine</p>
            <p>₦8,000</p>
          </div>
          <div class="ticket-description">
            <p>
              Duoble-end ticket. Select this ticket option and proceed.
              <br>
              <i>Note: Not available for same-gender pairs and same-faculty
                pairs.</i>
            </p>
          </div>
        </div>
        <div class="ticket-sign green">
          <input
            id="ticket-check"
            v-model="regular2"
            type="checkbox"
            name="check"
          >
        </div>
      </div>
      <primary-button class="continue-btn" @action="buyTicket()" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BuyTicket',
  data () {
    return {
      regular1: false,
      regular2: false,
      regular1Link: 'https://selar.co/kj6j30',
      regular2Link: 'https://selar.co/1c12f3',
      remaining: 25
    }
  },
  mounted () {
    this.getRemainingTickets()
  },
  methods: {
    selectTicket (type) {
      switch (type) {
        case 'regular':
          this.regular1 = true
          this.regular2 = false
          break
        case 'me-and-mine':
          this.regular1 = false
          this.regular2 = true
          break
      }
    },
    buyTicket () {
      if (this.regular1) {
        window.location.href = this.regular1Link
      } else if (this.regular2) {
        window.location.href = this.regular2Link
      } else {
        alert('select a ticket')
      }
    },
    getRemainingTickets () {
      fetch('https://fybdinner.fly.dev/ticket/remaining')
        .then(resp => resp.json())
        .then((data) => {
          if (!data.error) {
            this.remaining = data.data.tickets
          }
        })
    }
  }
}
</script>
<style scoped>
.top h3 {
  font-size: 30px;
  font-weight: 420;
  letter-spacing: 0.5px;
}

.top p {
  margin-top: 10px;
  color: var(--light-grey)
}

.body {
  margin-top: 40px;
}
.ticket-category {
  display: flex;
  width: 100%;
  border: 1px solid #bdc0ce;
  border-radius: 16px;
  padding: 20px 15px;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
}

/* .ticket-category:hover {
  cursor: pointer;
  background: #F4F5F8;
  border: 1px solid var(--dark-grey)
} */

.selected {
  cursor: pointer;
  background: #f4f5f8;
  border: 1px solid var(--dark-grey);
}

.selected-green {
  cursor: pointer;
  background: #e6f7e499;
  border: 1px solid #20af0b;
}

.icon img {
  width: 68px;
}

.ticket-body-top {
  display: flex;
  justify-content: space-between;
}

.ticket-body-top p {
  font-weight: 500;
  font-size: 18px;
  color: var(--dark-grey);
}

.ticket-description {
  margin-top: 5px;
}

.ticket-description p {
  font-size: 14px;
  color: var(--light-purple);
  line-height: 20px;
}

.ticket-sign {
  width: 68px;
  /* background: rebeccapurple; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.ticket-sign input[type='checkbox'] {
  accent-color: var(--dark-grey);
  opacity: 0.1;
  width: 18px;
  height: 18px;
}
.ticket-sign input[type='checkbox']:checked {
  accent-color: var(--dark-grey);
  border-radius: 10px;
  opacity: 1;
}

.ticket-sign.green input[type='checkbox']:checked {
  accent-color: #20af0b;
  border-radius: 10px;
  opacity: 1;
  color: #fff !important;
}

.continue-btn {
  width: 100% !important;
  margin-top: 30px;
  height: 55px;
}

@media (max-width: 500px) {
  .icon img {
    width: 48px;
  }

  .ticket-body-top p {
    font-size: 14px;
  }

  .ticket-description p {
    font-size: 12px;
  }
}
</style>
