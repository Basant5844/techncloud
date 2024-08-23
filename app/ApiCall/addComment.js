export async function addComment(formData) {
    debugger;
    try {
      const response = await fetch('http://localhost:7075/api/UserRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('HTTP error:', response.status, response.statusText, errorText);
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }

// export async function addComment(formData) {
//     debugger;
//     const response = await fetch('http://localhost:7075/api/UserRegistration', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
  
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
  
//     const result = await response.json();
//     return result;
//   }
  