let sound

function setup() {
  canvas = createCanvas(windowWidth, windowHeight)
  initModel()

  sound = new Pizzicato.Sound()
  //sound.play()

}

function draw() {
  background('green')
  
  let size = map(value, 0, 1, 8, 50)
  for(let i=0; i<100; i++){
    square(random(windowWidth), random(windowWidth), size)
  }

  let radius = map(value, 0, 1, 0, 600)
  circle(windowWidth / 2, windowHeight / 2, radius)

  let frequency = map(value, 0, 1, 100, 1000)
  sound.frequency = frequency
}
