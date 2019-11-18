import '../styles/styles.css'
import { Budget } from './budget'

document.getElementById('budget-form').addEventListener('submit', Budget.getBudget())