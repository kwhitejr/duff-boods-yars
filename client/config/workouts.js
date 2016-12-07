/*************
*
* id: [phase, day] (week is irrelevant)
* title: String - describes the workout in sum
* exercises: Array of Objects
*   name: String - describes the specific exercise
*   sets: Array of Numbers - array length is number of sets, array values are the reps for that set
*   track: String - the type of input to track (i.e. lbs kgs rep#)
*************/

export default [
  {
    id:     [1,1], 
    title:  'Back & Rear Deltoids',
    exercises: [
      {
        name: 'deadlifts',
        sets: [10,8,6,4],
        track: 'weight',   
      },
      {
        name: 'pullups',
        sets: [10,10,10,10],
        track: 'sets',
      },
      {
        name: 'single arm dumbbell row',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 't-bar row',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell facepulls',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'bent-over lateral raises',
        sets: [15,15,15],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,2], // [phase,day]
    title:  'Chest & Front Deltoids',
    exercises: [
      {
        name: 'incline dumbbell press',
        sets: [12,10,8,8],
        track: 'weight',
      },
      {
        name: 'barbell flat press',
        sets: [10,8,8,6],
        track: 'weight',
      },
      {
        name: 'landmine press',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'dumbbell flys',
        sets: [15,15,15],
        track: 'weight',
      },
      {
        name: 'dumbbell upright rows',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'alternating dumbbell front raises',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'lateral raises',
        sets: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,3], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'squats',
        sets: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'walking lunges',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'romanian deadlifts',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'glute bridges',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'kettle bell swings',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'seated calf raises',
        sets: [10,10,10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [1,4],
    title:  'Arms & Traps',
    exercises: [
      {
        name: 'close grip press',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'skull crushers',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'kick backs',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'underhand pull down',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell curls',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'alernating hammer curls',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'barbell shrug',
        sets: [10,10,10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,1], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'squats',
        sets: [12,10,8,6,4],
        track: 'weight',
      },
      {
        name: 'step-ups',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'trap bar deadlifts',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'lateral box squats',
        sets: [10,10,10],
        track: 'sets',
      },
      {
        name: 'romanian deadlifts',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'seated calf raises',
        sets: [12,12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,2], // [phase,day]
    title:  'Back, Traps, & Biceps',
    exercises: [
      {
        name: 'deadlifts',
        sets: [10,8,6,4],
        track: 'weight',
      },
      {
        name: 'bent-over row',
        sets: [8,8,8,8],
        track: 'weight',
      },
      {
        name: 'v-grip pullups',
        sets: [8,8,8,8],
        track: 'sets',
      },
      {
        name: 'dumbbell pull-overs',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'dumbbell shrugs',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'drag curls',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'incline bench dumbbell curls',
        sets: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,3], // [phase,day]
    title:  'Chest & Triceps',
    exercises: [
      {
        name: 'dumbbell press',
        sets: [12,10,8,8],
        track: 'weight',
      },
      {
        name: 'incline barbell press',
        sets: [10,10,10,10],
        track: 'weight',
      },
      {
        name: 'single-arm dumbbell press',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'incline dumbbell fly',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'single-arm dumbbell french press',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'cross bench dips',
        sets: [10,10,10],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,4], // [phase,day]
    title:  'Deltoids & Forearms',
    exercises: [
      {
        name: 'overhead press',
        sets: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'single-arm kettlebell press',
        sets: [10,10,10],
        track: 'weight',
      },
      {
        name: 'reverse upright row',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'lateral raises',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'reverse curls',
        sets: [12,12,12],
        track: 'weight',
      },
      {
        name: 'finger curls',
        sets: [12,12,12],
        track: 'weight',
      },
    ]
  },
  {
    id:     [2,5], // [phase,day]
    title:  'Legs & Calves',
    exercises: [
      {
        name: 'front squats',
        sets: [12,10,8,6],
        track: 'weight',
      },
      {
        name: 'glute bridges',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'split squats',
        sets: [8,8,8,8],
        track: 'weight',
      },
      {
        name: 'single leg romanian deadlifts',
        sets: [12,12,12,12],
        track: 'weight',
      },
      {
        name: 'standing calf raises',
        sets: [12,12,12,12],
        track: 'weight',
      },
    ]
  },
]