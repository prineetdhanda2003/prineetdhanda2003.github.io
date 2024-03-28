(function (core) {
  // Define the Router class within the IIFE
  class Router {
    constructor() {
      // Set ActiveLink property to an empty string by default
      this.ActiveLink = "";
      this.routes = [];
    }

    Add(route) {
      this.routes.push(route);
    }

    AddTable(routingTable) {
      this.routes.push(...routingTable);
    }


    Find(route) {
      return this.routes.find(r => r.path === route);
    }

    Remove(route) {
      const routeid = this.routes.findIndex(r => r === route);
      if (routeid > -1) {
        this.routes.splice(routeid, 1);
      }
    }

    toString() {
      return `Router: ActiveLink: ${this.ActiveLink}, Routes: ${JSON.stringify(this.routes)}`;
    }
  }

  // Attach the Router class to the core namespace
  core.Router = Router;
})(window);