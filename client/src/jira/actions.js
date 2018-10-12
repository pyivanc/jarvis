import axios from 'axios';

export function getJiraTicket(ticketId='AMP-1801') {
    return axios.get(`http://localhos:5000/api/jira/tickets/${ticketId}`)
}
