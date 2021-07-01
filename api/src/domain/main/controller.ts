export const MainController = () => {
  const getAll = (): { [key: string]: string } => {
    // these should ideally be dynamic or come from a config file
    return {
      all_events: "/events",
      event: "/events/{id}",
    }
  }

  return {
    getAll,
  }
}
