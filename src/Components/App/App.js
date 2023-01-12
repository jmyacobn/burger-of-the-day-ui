import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [
        {
          id: 1,
          name: '"New Bacon-ings" - Comes with Bacon',
          price: '$5.95',
          servings: "4 burgers", 
          description: 'A classic all-beef patty topped with lettuce, cheddar cheese, onion, tomato, and bacon. It\’s what George Washington was fighting for. It\’s what the Statue of Liberty wishes it was holding instead of a dumb torch. So use the freshest ingredients you can find, down to the bun.',
          ingredients: ['1 lb bacon', 'russet potatoes', 'cooking oil (peanut recommended)', '1 lb ground beef', '1 cup whole milk', '1 large egg', '4 buns', 'green leaf lettuce', '1 tomato, sliced', '1 red onion'],
          instructions: [
            {
              step: 1,
              instruction: 'Preheat your oven to 400\u00B0F. If you prefer to cook your bacon in a skillet, chop all but 8 slices and fry over medium heat until almost crisp and most of the fat has rendered. Drain the chopped bacon on paper towels, wipe out the skillet, and fry the remaining slices till crisp. Drain and reserve. Or, spread the strips onto a rack placed in a rimmed baking sheet and bake in the oven until brown and crisp, about 15-20 minutes. Reserve 8 slices and finely chop the rest.Keep the oven on.'
            },
            {
              step: 2,
              instruction: 'Wash your russet potatoes (peeling optional). Cut your potato into 1/4 inch sticks. Heat your oil to 325\u00B0F in a heavy, high-walled pot. Use enough oil to cover your fries. In batches, drop in the potato sticks and cook for 5 minutes until limp. Do not cover. Let them brown. Remove carefully with a long-handled slotted spoon or metal stainer and place on paper towels. Drain and let cool.'
            },
            {
              step: 3,
              instruction: 'Combine the milk and egg in a large bowl. Coat the blanched, cooled fries in the mixture and spread on a parchment-lined baking sheet. Toss the coated fries with the chopped bacon and return to the oven for 10-15 minutes, until the bacon-y fries are extra crispy.'
            },
            {
              step: 4,
              instruction: 'Meanwhile, make 4 patties, season both sides with salt and pepper, and cook your burgers. When they\'re just about done, top with cheese.'
            },
            {
              step: 5,
              instruction: 'Build your burger: Bottom bun, lettuce, cheeseburger, tomato, bacon slices, onion, top bun. Serve with bacon-y fries.'
            }
          ],
        },
        {
          id: 2,
          name: 'Eggers Can\'t Be Cheesers Burger',
          price: '$5.95',
          servings: "4 burgers", 
          description: 'An all-beef patty topped with American cheese and a fried egg sunny-side up. Served with hot sauce and a piece of lettuce on a plain bun. It\’s eggsactly as eggstraordinary as it sounds. Eggs.',
          ingredients: ['1 lb ground beef', '8 slices American cheese', '4 large eggs', 'butter', '4 English muffins', 'green leaf lettuce', 'hot sauce (optional)'],
          instructions: [
            {
              step: 1,
              instruction: 'Make 4 patties, season both sides with salt and pepper, and cook the burgers. When they/’re just about done, top with the cheese (2 slices per burger).'
            },
            {
              step: 2,
              instruction: 'In a large frying pan, cook your eggs sunny-side up over a bit of butter. No flipping these guys—that\’s what sunny side up means. It\’s also a good way to describe your attitude these days.'
            },
            {
              step: 3,
              instruction: 'Toast your Engish muffins.'
            },
            {
              step: 4,
              instruction: 'Build your burger: Spread a tiny bit of butter on your toasted English muffins, then bottom muffin, cheeseburger, and egg on top. Finish it off with hot sauce, and the muffin on top. YOUR muffin top is gonna love it!'
            },
            {
              step: 5,
              instruction: 'Grab a napkin - you\'ll need it!'
            }],
        },
        {
          id: 3,
          name: 'A Good Manchego is Hard to Find Burger',
          price: '$5.95',
          servings: "4 burgers", 
          description: 'A burger topped with caramelized shallots, Manchego cheese, and a generous helping of fig jam. Fig jam! Banned. Banned!! Remember? From the show?',
          ingredients: ['2 tablespoons butter', '6 shallots, peeled and thinly sliced', '1 lb ground beef', '1 small block Manchego cheese, sliced', 'fig jam', '4 buns', 'arugla or boston lettuce'],
          instructions: [
            {
              step: 1,
              instruction: 'Melt the butter in a wide frying pan over medium-low heat. Add the shallots and stir to coat. Cook over faily low heat, stirring occasionally, until the shallots are very soft and a deep, sticky golden brown, about 15-20 minutes.'
            },
            {
              step: 2,
              instruction: 'Form 4 patties, season both sides with salt and pepper, and cook the burgers, melting a few slices of Manchego over each burger. Cover the pan or tent with foil to help the cheese melt.'
            },
            {
              step: 3,
              instruction: 'Build your burger: Bottom bun, then the cheeseburger, arugula, and sautéed shallots. Spread the fig jam on the top bun. Spread happiness in your face.'
            }
          ],
        }
      ]
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Burger of the Day</h1>
      </main>
    )
  }
}

export default App;
