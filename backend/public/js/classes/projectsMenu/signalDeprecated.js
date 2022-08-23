export const changeElement = (s) => {

  if (s[s.selectedIndex].value !== 'Select project') {
    console.log(s[s.selectedIndex].value + ' value')// get value
    console.log(s[s.selectedIndex].id + ' id') // get id
    s.value = 'Select project'
    
  }

}

