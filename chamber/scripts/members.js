// Load the JSON data from an external file
fetch('data.json')
  .then(response => response.json())
  .then(data => {

// Filter members with silver or gold status
const directoryData = "data.json";
const filteredMembers = directoryData.members.filter(function(members) {
    return members.status === "silver" || members.status === "gold";
  });
  
  // Randomly select two members
  let selectedMembers = [];
  let numMembersToDisplay = Math.min(2, filteredMembers.length);
  
  for (let i = 0; i < numMembersToDisplay; i++) {
    let randomIndex = Math.floor(Math.random() * filteredMembers.length);
    let randomMember = filteredMembers.splice(randomIndex, 1)[0];
    selectedMembers.push(randomMember);
  }
  
  // Display the selected members
  selectedMembers.forEach(function(members) {
    console.log("Name: " + members.name);
    console.log("Status: " + members.status);
    console.log("-----");
  });
})
.catch(error => console.error(error));