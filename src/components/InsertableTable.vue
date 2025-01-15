<script setup>
import {ref,computed} from 'vue'

const name=ref('')
const dob=ref('')

const personList=ref([])

function addData() {
  if(validData()) {
    personList.value.push({'name':name.value,'dob':dob.value})
    name.value=dob.value=''
  }
}

const getAge=computed(()=>{return personList.value.map(calculateAge)})

function calculateAge(person) {
  return ((new Date()).getYear() - (new Date(person.dob)).getYear())
}

function validData() {
  return (name.value && dob.value)
}
</script>


<template>

<div class="Table">
  <div class="Title">
    <p>Participant Application Form Test App</p>
  </div>
  <div class="Heading">
    <div class="Cell">
      Name
    </div>
    <div class="Cell">
      DOB
    </div>
    <div class="Cell">
      Age
    </div>
    <div class="Cell">
      Current placement
    </div>
  </div>
  <div class="Row" v-for="(person, index) in personList" :key="index">
    <div class="Cell">
      {{ person.name }}

    </div>
    <div class="Cell">
      {{ person.dob }}
    </div>
    <div class="Cell">
      {{ getAge[index] }}
    </div>
  </div>
</div>


<br>
Name: <input type='text' v-model='name'/><br>
DOB: <input type='date' v-model='dob'/><br>
<button @click="addData">Add</button>
</template>

<style scoped>
  .Table
    {
        display: table;
    }
  .Title
    {
        display: table-caption;
        text-align: center;
        font-weight: bold;
        font-size: larger;
    }
  .Heading
    {
        display: table-row;
        font-weight: bold;
        text-align: center;
    }
  .Row
    {
        display: table-row;
        cursor:pointer;
    }
  .Cell
    {
        display: table-cell;
        border: solid;
        border-width: thin;
        padding-left: 5px;
        padding-right: 5px;
      	width:500px;
    }
</style>