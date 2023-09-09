<template>
  <div>
    <div id="pdf" class="wrapper">
      <div class="qr-code">
        <img v-show="fullname != ''" :src="qrString" alt="" title="">
      </div>
      <div class="top">
        <h2>Ticket purchased!</h2>
        <p>Check your mail, we just sent you a receipt of your ticket!</p>
      </div>
      <div class="body">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ fullname }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ email }}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{{ date }}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>₦{{ amount }}</td>
            </tr>
            <tr>
              <td>Ticket type</td>
              <td>{{ type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="btns" class="ctas">
        <secondary-button
          :name="'Download Ticket'"
          class="btn"
          @action="downloadTicket"
        />
        <primary-button :name="'Send to me'" class="btn" />
      </div>
    </div>
    <!-- <client-only>
      <Vue3Html2pdf>
          <section slot="pdf-content">
            <div id="downloadPdf" class="wrapper">
      <div class="qr-code">
        <img v-show="fullname != ''" :src="qrString" alt="" title="">
      </div>
      <div class="top">
        <h2>Ticket purchased!</h2>
        <p>Check your mail, we just sent you a receipt of your ticket!</p>
      </div>
      <div class="body">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{{ fullname }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ email }}</td>
            </tr>
            <tr>
              <td>Date</td>
              <td>{{ date }}</td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>₦{{ amount }}</td>
            </tr>
            <tr>
              <td>Ticket type</td>
              <td>{{ type }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
          </section>
      </Vue3Html2pdf>
    </client-only> -->
  </div>
</template>

<script>
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
export default {
  name: 'TicketView',
  props: {
    fullname: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    amount: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  computed: {
    qrString () {
      const strCode = JSON.stringify({
        fullname: this.fullname,
        email: this.email,
        id: this.id,
        type: this.type
      })
      return `https://api.qrserver.com/v1/create-qr-code/?data=${strCode}&size=150x150`
    }
  },
  methods: {
    downloadTicket () {
      document.getElementById('btns').style.display = 'none'
      const html = document.getElementById('pdf')
      html.style.margin = 30

      html2canvas(html, {
        useCORS: true
      }).then((canvas) => {
        const img = canvas.toDataURL('image/png')
        // eslint-disable-next-line new-cap
        const doc = new jsPDF('p', 'px')
        const width = doc.internal.pageSize.getWidth()
        const height = doc.internal.pageSize.getHeight()
        const widthRatio = width / canvas.width
        const heightRatio = height / canvas.height
        const ratio = widthRatio > heightRatio ? heightRatio : widthRatio
        doc.internal.pageSize.width = canvas.width
        doc.internal.pageSize.height = canvas.height
        doc.addImage(
          img,
          'JPEG',
          20,
          20,
          canvas.width * ratio,
          canvas.height * ratio
        )
        let pdfName = `${this.fullname || 'RECEIPT'}-${this.type || 'RECEIPT'}-${this.date || 'DATE'}`
        pdfName = pdfName.replaceAll(' ', '-').toUpperCase()
        doc.save(`${pdfName}.pdf`)
        document.getElementById('btns').style.display = 'flex'
      })
    },
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
}
.qr-code {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: var(--qr-code-ctn-bd) solid rgba(234, 234, 234, 0.25);
  width: fit-content;
  align-self: center;
  --qr-code-ctn-pd: 3px;
  --qr-code-ctn-bd: 1px;
  width: calc(150px + var(--qr-code-ctn-pd) + var(--qr-code-ctn-bd));
  height: calc(150px + var(--qr-code-ctn-pd) + var(--qr-code-ctn-bd));
  background: rgba(234, 234, 234, 0.25);
}

.qr-code img {
  margin: auto;
  box-shadow: 0px 2px 6px 0px rgba(47, 43, 67, 0.1),
    0px 4px 0px 0px rgba(234, 234, 234, 0.25) inset;
  /* width: 150px; */
}

.top {
  margin: 40px auto;
  text-align: center;
  width: 80%;
  /* background: rebeccapurple; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.top h2 {
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.5px;
}

.top p {
  color: #565c69;
  font-size: 16px;
  font-style: normal;
  line-height: 24px; /* 150% */
  letter-spacing: -0.192px;
  width: 250px;
  margin-top: 10px;
  word-spacing: 0.5px;
}

.body {
  margin-top: 10px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--untitled-g-5, #e5e7ef);
  box-shadow: 0px 1px 3px 0px rgba(47, 43, 67, 0.1),
    0px 2px 0px 0px rgba(234, 234, 234, 0.25) inset;
  color: #7e8494;
}

.body table {
  /* background: rebeccapurple; */
  width: 100%;
}
tr {
  height: 40px;
}

tr td {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.14px;
}

tr td:nth-child(1) {
  font-weight: 300;
}

tr td:nth-child(2) {
  display: flex;
  justify-content: flex-end;
  color: #303237;
  font-weight: 500;
}

.ctas {
  display: flex;
  gap: 10px;
  margin-top: 30px;
  width: 100%;
  justify-content: space-between;
}

.btn {
  width: 100%;
}

@media (max-width: 500px) {
  .ctas {
    flex-direction: column;
  }
}
</style>
