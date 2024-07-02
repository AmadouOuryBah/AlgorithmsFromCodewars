function likes(names) {

    if(names.length === 0){
        return 'no one likes this'
    }
    else if(names.length === 1){
        return `${names[0]} like this`
    }
    else if(names.length === 2){
        return `${names[0]} and ${names[1]} like this`
    }
    else if(names.length === 3){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else{
        return `${names[0]},${names[1]} and ${names.slice(2, names.length + 1).length} others like this`
    }
  
  }

  console.log(likes([]))
  console.log(likes(['Alex']))
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))