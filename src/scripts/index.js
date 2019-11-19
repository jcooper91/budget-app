import '../styles/styles.css'
import { timingSafeEqual } from 'crypto';
// 50:18 mins
class UI {

  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm() {
    const value = this.budgetInput.value 
    if(value === '' || value < 0) {
      this.budgetFeedback.classList.add('showItem')
      this.budgetFeedback.innerHTML = `<p>Budget cannot be empty or negative number</p>`
      setTimeout(() => {
       this.budgetFeedback.classList.remove('showItem')
      }, 2000)
    } else {
        this.budgetAmount.textContent = value
        this.budgetInput.value = ''
        this.showBalance()
    }
  }

  submitExpenseForm() {
    const expenseValue = this.expenseInput.value 
    const amountValue = this.amountInput.value 

    if(expenseValue === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem')
      this.expenseFeedback.innerHTML = `<p>Item must not be empty or a negative value</p>`
      setTimeout(() => {
        this.expenseFeedback.classList.remove('showItem')
      }, 2000)
    } else {
      let amount = parseInt(amountValue)
      this.expenseValue = ''
      this.amountValue = ''
      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount
      }
      this.itemID++
      this.itemList.push(expense)
    }
    console.log(this.itemList)
  }

  showBalance() {
      const expense = this.totalExpense()
      const total = parseInt(this.budgetAmount.textContent) - expense
      this.balanceAmount.textContent = total
      if(total > 0) {
        this.balance.classList.remove('showRed', 'showBlack')
        this.balance.classList.add('showGreen')
      } else if(total < 0) {
        this.balance.classList.remove('showGreen', 'showBlack')
        this.balance.classList.add('showRed')
      } else {
        this.balance.classList.remove('showGreen', 'showRed')
        this.balance.classList.add('showBlack')
      }
  }
  totalExpense() {
      let total = 400 
      return total
  }
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form")
  const expenseForm = document.getElementById("expense-form")
  const expenseList = document.getElementById("expense-list")
  
  const ui = new UI()

  budgetForm.addEventListener('submit', (e) => {
    e.preventDefault()
    ui.submitBudgetForm()
  })

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    ui.submitExpenseForm()
  })

  expenseList.addEventListener('click', (e) => {

  })
}

document.addEventListener('DOMContentLoaded', (e) => {
  eventListeners()
})