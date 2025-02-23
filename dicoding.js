const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
        const newEmployess = {
            name: name,
            email: email,
            joinYear: joinYear
        }

    
    /**
     * TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */
    employees.push(newEmployess)
  }
  
  addEmployee('Afgan', 'afgan@dicoding.com', 2025 );

  console.log(employees)
