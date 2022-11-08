document.addEventListener("message", this)
    function handleEvent(event) {
      if (event.type === "message") {
        const data = event.detail
        console.log('Remove project ', data.message)

      }
    }
    