<template>
  <div>
    <h3>Agregar empleado</h3>
    <div class="row">
      <b-form @submit.prevent="onSubmit" class="col-md-12">
        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el nombre"
            v-model="employeeForm.name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Apellido paterno:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el apellido paterno"
            v-model="employeeForm.last_name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Apellido materno:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el apellido materno"
            v-model="employeeForm.surname"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Fecha de nacimiento:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="date"
            v-model="employeeForm.birthdate"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="CURP:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba la CURP"
            v-model="employeeForm.curp"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="SSN:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el SSN"
            v-model="employeeForm.ssn"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Telefono:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba el telefono"
            v-model="employeeForm.phone"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Nacionalidad:" label-for="input-2">
          <b-form-input
            id="input-2"
            placeholder="Escriba la nacionalidad"
            v-model="employeeForm.nationality"
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
    name:"AddEmployeeView",
    data() {
      const employeeForm = {
        name: '',
        last_name: '',
        surname: '',
        birthdate: '',
        curp: '',
        ssn: '',
        phone: '',
        nationality: ''
      }

      return {
        employeeForm
      }
    },
    methods: {
      async onSubmit() {
        console.log(this.employeeForm)
        await this.sendEmployee(this.employeeForm)
        this.$router.push({ name: "dashboard"})
      },
      ...mapActions('employees', [
        'sendEmployee'
      ])
    }
  }
</script>
