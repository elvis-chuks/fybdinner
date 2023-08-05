<template>
  <div>
    <modal v-if="showModal == true" @closeModal="showModal = false">
      <ticket-view
        :id="id"
        :fullname="fullname"
        :email="email"
        :type="type"
        :amount="'8,000'"
        :date="date"
      />
    </modal>
  </div>
</template>
<script>
import Modal from '~/components/modal.vue'
import ticketView from '~/components/ticketView.vue'
export default {
  name: 'MeAndMine',
  components: { ticketView, Modal },
  data () {
    return {
      email: '',
      fullname: '',
      type: '',
      id: '',
      date: '',
      showModal: true
    }
  },
  mounted () {
    if (this.$route.params.id === '') {
      this.$router.push('/')
    }
    this.id = this.$route.params.id
    this.getTicket(this.$route.params.id)
  },
  methods: {
    createTicket (params) {},
    getTicket (id) {
      fetch(`https://fybdinner.fly.dev/${id}`)
        .then(resp => resp.json())
        .then((data) => {
          // eslint-disable-next-line no-console
          if (!data.error) {
            this.email = data.data.email
            this.fullname = data.data.fullname
            this.type = data.data.type
            const date = new Date(data.data.created_at)
            this.date = date.toDateString()
          }
        })
    }
  }
}
</script>
<style scoped></style>
