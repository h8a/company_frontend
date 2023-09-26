<template>
  <div>
    <h3>Editar empleado</h3>
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
    <div class="row mt-5">
      <button
        class="btn btn-success mb-1"
        @click="addBeneficiario"
      >
        Agregar beneficiario
      </button>
       <b-table
        show-empty
        empty-text="No hay información"
        responsive
        :items="items"
        :fields="fields"
        :busy="isBusy"
      >
        <template #table-busy>
          <div class="text-center text-danger my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Cargando...</strong>
          </div>
        </template>
        <template #cell(id)="row">
          <button
            class="btn btn-info"
            @click=editBeneficiarie(row.item.id)
          >
            Editar
          </button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    name:"EditEmployeeView",
    data() {
      const fields = [
        { key: "name", label: "Nombre", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "last_name", label: "Apellido Paterno", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "surname", label: "Apellido Materno", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "birthdate", label: "Fecha de nacimiento", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "last_name", label: "Apellido Paterno", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "number_employee", label: "Número de empleado", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "curp", label: "CURP", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "ssn", label: "SSN", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "phone", label: "Telefono", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "nationality", label: "Nacionalidad", sorted: true, sortDirection: "asc", class: "text-center" },
        { key: "id", label: "Opciones", sorted: true, sortDirection: "asc", class: "text-center" },
      ]
      return {
        isBusy: true,
        fields,
        items: [],
        employeeID: null,
        employeeForm: {}
      }
    },
    computed: {
      ...mapState('employees', {
        beneficiaries: state => state.beneficiaries
      })
    },
    methods: {
      addBeneficiario() {
        this.$router.push({name: "beneficiarieAdd", params: { employeeID: this.employeeID }})
      },
      async onSubmit() {
        await this.updateEmployee(this.employeeForm)
        this.$router.push({ name: "dashboard" })
      },
      ...mapActions('employees', [
        'getEmployeeByID', 'updateEmployee', 'getBeneficiaries'
      ])
    },
    created() {
      this.employeeID = this.$route.params.employeeID;
    },
    async mounted() {
      this.employeeForm = await this.getEmployeeByID(this.employeeID)
      await this.getBeneficiaries(this.employeeID)
      this.items = this.beneficiaries
      this.isBusy = false
    }
  }
</script>
