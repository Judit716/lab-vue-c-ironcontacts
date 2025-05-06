<template>
  <div>
    <button @click="contacts.addRandomContact">Add Random Contact</button>
    <button @click="contacts.sortByName">Sort by Name</button>
<button @click="contacts.sortByPopularity">Sort by Popularity</button>


    <h1>IronContacts</h1>
    <table border="1">
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th> 
          <th>Won an Emmy</th>  
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contacts.displayedContacts" :key="contact.id">
          <td>
            <img :src="contact.pictureUrl" :alt="contact.name" width="100" />
          </td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.popularity.toFixed(2) }}</td>
          <td>{{ contact.wonOscar ? '🏆' : '' }}</td>  <!-- 🏆 si ha ganado un Oscar -->
          <td>{{ contact.wonEmmy ? '🏆' : '' }}</td>   
          <td>
    <button @click="contacts.deleteContact(contact.id)">Delete</button>
  </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useContactsStore } from './stores/contacts'

const contacts = useContactsStore()
</script>

<style>
table {
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  text-align: left;
}
img {
  border-radius: 8px;
}
</style>

