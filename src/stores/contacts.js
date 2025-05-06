import { defineStore } from 'pinia'
import contactsData from '@/contacts.json'

export const useContactsStore = defineStore('contacts', {
  state: () => ({
    allContacts: contactsData, // todos los contactos
    displayedContacts: contactsData.slice(0, 5) // solo 5
  }),
  actions: {
    addRandomContact() {
      const remaining = this.allContacts.filter(
        contact => !this.displayedContacts.some(c => c.id === contact.id)
      )

      if (remaining.length === 0) return

      const randomIndex = Math.floor(Math.random() * remaining.length)
      const randomContact = remaining[randomIndex]

      this.displayedContacts.push(randomContact)
    },

    sortByName() {
      this.displayedContacts.sort((a, b) => a.name.localeCompare(b.name))
    },
  
    sortByPopularity() {
      this.displayedContacts.sort((a, b) => b.popularity - a.popularity)
    },
    deleteContact(id) {
        this.displayedContacts = this.displayedContacts.filter(c => c.id !== id)
      }
      
  }
})
