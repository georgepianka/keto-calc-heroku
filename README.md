# Keto Calc
### Calculate Net Carbs / Track Keto Diet Progress

This is a Rails App made by George Pianka for Flatiron School Final Project Section 4 (React/Rails). The application allows the user to calculate, log, and track Net Carbs while following a Ketogenic Diet. Nutrition Data is provided by Nutritionix via their API. Users can store their daily entries for Net Carbs and Calories via a database search or manual entry. Users may also enter their daily Weight so they can chart their progress against the metrics of Ketosis. [*See Details at Bottom of README*]

---

## Setting Up

#### 1. Clone
`$ git clone https://github.com/NotoriousCottonball/fit_dish_RailsJS.git`
#### 2. Bundler
`$ bundle install`
#### 3. Database
`$ rails db:setup` | `$ rails db:schema:load` | `$ rails db:seed`
##### *Note: Fit Dish uses Postgres. Please Make Postgres available on your machine by following the instructions at https://www.postgresql.org/download/.*
#### 4. NPM
`$ cd client`
`$ npm i`
`$ cd ..`


## Local Deployment

#### Start Client and API Servers
`$ rake start`
##### *Executes Foreman, running Procfile.dev*
##### *The Client App Boots at http://localhost:3000.*
##### *The API Server Listens at https://localhost:3001.*
##### *Hitting CTRL+C kills both processes together.*

---

## Built With

* [Ruby on Rails](http://rubyonrails.org) - Web framework
* [OmniAuth](https://github.com/omniauth/omniauth) - Third-Party Login

## Contributing

Bug reports and pull requests are welcome on GitHub at
#### https://github.com/NotoriousCottonball/fit_dish_RailsJS.
This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

---

## Ketogenic Diet Info

Ketosis is a natural metabolic state in which the body begins to burn fat for energy by converting it to ketones in the liver when glycogen stores are depleted.

The Ketogenic Diet, Keto, intentionally induces Ketosis via principally restricting Carbohydrates.

##### Deplete Glycogen ==> Process Fats ==> Produce Ketones

### __Classic Keto Diet__:
#### 70% Fat, 20% Protein, 10% Carbs
#### 4:1 Ratio of Fat to Protein/Carbs
#### Net Carbs between 20 - 50 grams

--


### Net Carbs

- Net Carbs are digestible carbohydrates used for energy, like starches and sugars.

- Fiber is a type of carbohydrate from plants that the body cannot process.  

- Sugar alcohols like Xylitol and Erythritol have a molecular structure that differs enough from sugar to make them almost entirely indigestible.

- ##### Net Carbs = Total Carbohydrates - Fiber - Indigestible Sugar Alcohol

### Protein

- When the body consumes excess protein, some of the amino acids are turned into glucose via gluconeogenesis.

- The target range is 0.7–0.9 grams of protein per pound of body weight.

### Testing Ketosis
- Track Ketones via a Blood Ketone Meter.

- Determine if you are in Ketosis via Urine Sticks (yes/no without an accurate measure of blood ketones).

- Establish Maximum Net Carbs by first eating less than 35 grams of Net Carbs (20-50 gram range), verifying Ketosis via a ketone meter, and slowly increasing Carbohydrate consumption by 5 grams each day.

### Electrolytes
- Since insulin levels remain lower during Ketogenesis due to lack of carbohydrates, the body excretes more water along with essential electrolytes like Sodium, Potassium, Calcium, and Magnesium.

- Increase intake of these electrolytes through diet or other supplementation.

#####  *** Disclaimer
*All the information presented in this README is for educational purposes only.  
You should consult your physician or other health care professional before starting any diet to determine if it is right for your needs.*
