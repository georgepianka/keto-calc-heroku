# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: "user@email.com", username: "User", password: "password")

Day.create(user_id: 1, date: Date.strptime('09/20/2019', '%m/%d/%Y'), weight: 189)
Day.create(user_id: 1, date: Date.strptime('09/22/2019', '%m/%d/%Y'), weight: 187)


Entry.create(day_id: 1, name: "Snack Bar", net_carbs: 10, calories: 200, protein: 5, fat: 15)
Entry.create(day_id: 1, name: "Snack Bar", net_carbs: 9, calories: 300, protein: 6, fat: 16)
Entry.create(day_id: 1, name: "Protein Bar", net_carbs: 8, calories: 400, protein: 7, fat: 17)

Entry.create(day_id: 2, name: "Snack Bar", net_carbs: 9, calories: 250, fat: 15)
Entry.create(day_id: 2, name: "Snack Bar", net_carbs: 8, calories: 350, protein: 6)
Entry.create(day_id: 2, name: "Protein Bar", net_carbs: 7, calories: 450, protein: 7, fat: 17)


Day.create(user_id: 1, date: Date.strptime('10/20/2019', '%m/%d/%Y'), weight: 185)
Day.create(user_id: 1, date: Date.strptime('10/30/2019', '%m/%d/%Y'), weight: 183)

Entry.create(day_id: 3, name: "Snack Bar", net_carbs: 8, calories: 200, protein: 5, fat: 15)
Entry.create(day_id: 3, name: "Snack Bar", net_carbs: 7, calories: 300, protein: 6, fat: 16)
Entry.create(day_id: 3, name: "Protein Bar", net_carbs: 6, calories: 400, protein: 7, fat: 17)

Entry.create(day_id: 4, name: "Snack Bar", net_carbs: 6, calories: 250, fat: 15)
Entry.create(day_id: 4, name: "Snack Bar", net_carbs: 6, calories: 350, protein: 6)
Entry.create(day_id: 4, name: "Protein Bar", net_carbs: 6, calories: 450, protein: 7, fat: 17)
