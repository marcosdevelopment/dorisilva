const Information = () => {
  const idGet = (id) => {
    id = window.location.href.length - window.location.href.lastIndexOf('/') - 1
    id = window.location.href.slice(-(id))
    return id
  }

  const id = idGet()
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default Information