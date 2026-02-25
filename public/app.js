const form = document.getElementById('patient-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  data.consent = formData.get('consent') === 'on';

  try {
    const response = await fetch('/api/register-patient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    alert(result.message);
    if (response.ok) form.reset();
  } catch (error) {
    alert('Server error. Please try again.');
    console.error(error);
  }
});