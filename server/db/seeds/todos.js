export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task_details: 'Multiday project', priority: 1, completed: false },
    {
      id: 2,
      task_details: 'Personal portfolio',
      priority: 2,
      completed: false,
    },
    { id: 3, task_details: 'Personal project', priority: 3, completed: false },
  ])
}
