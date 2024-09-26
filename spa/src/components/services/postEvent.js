export const postEvent = async (url, data) => {
  const config = {    
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }
  }

  try {
    const response = await fetch(url, {
      ...config,
      body: JSON.stringify(data),
    })

    if (response.status === 200 || response.status === 201) {
      return response.headers.location
    }

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
  } catch (e) {
    console.error(e)
  }
}
