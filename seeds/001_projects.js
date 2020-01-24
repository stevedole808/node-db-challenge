exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Ronda Rousey",
          description: "Fight",
          completed: false
        },
        {
          name: "Eating Project",
          description: "Eating video prank",
          completed: false
        },
        {
          name: "Basketball",
          description: "Basketball game",
          completed: false
        }
      ]);
    });
};
