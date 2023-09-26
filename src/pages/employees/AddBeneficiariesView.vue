<template>
  <div>
    <h1>Beneficiarios</h1>
    <div class="row">
      <b-form @submit.prevent="onSubmit" class="col-md-12">
        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el nombre"
            v-model="beneficiarieForm.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Apellido paterno:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el apellido paterno"
            v-model="beneficiarieForm.last_name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Apellido materno:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el apellido materno"
            v-model="beneficiarieForm.surname"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Fecha de nacimiento:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="date"
            v-model="beneficiarieForm.birthdate"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="CURP:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba la CURP"
            v-model="beneficiarieForm.curp"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="SSN:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el SSN"
            v-model="beneficiarieForm.ssn"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Telefono:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el telefono"
            v-model="beneficiarieForm.phone"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Nacionalidad:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba la nacionalidad"
            v-model="beneficiarieForm.nationality"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Porcentaje de participación:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Porcentaje de participación"
            v-model="beneficiarieForm.participation_percentage"
            required
          ></b-form-input>
        </b-form-group>
        <button
          class="btn btn-success"
          type="submit"
        >
          Guardar
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name:"AddBeneficiariesView",
    data () {
      const beneficiarieForm = {
        name: '',
        last_name: '',
        surname: '',
        birthdate: '',
        curp: '',
        ssn: '',
        phone: '',
        nationality: '',
        participation_percentage: 0
      }

      return {
        beneficiarieForm
      }
    },
    methods: {
      async onSubmit () {
        console.log('submited')
        const beneficiarie = {
          employee_id: this.employeeID,
          ...this.beneficiarieForm
        }
        await this.sendBeneficiaries(beneficiarie)
        this.$router.push({name: "employeeEdit", params: { employeeID: this.employeeID }})
      },
      ...mapActions('employees', [
        'sendBeneficiaries'
      ])
    },
    created() {
      this.employeeID = this.$route.params.employeeID;
    }
  }
</script>
