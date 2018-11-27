import Pub from './pub.js';
import Subscriber from './subscriber.js';
import Publisher from './publisher.js';

const pub = new Pub();

const subscriberA = new Subscriber('May', pub);
const subscriberB = new Subscriber('Hey', pub);

subscriberA.subscribe('weather', function(params) {
  console.log(`subscriberA gets the weather: ${params.temp}`);
});
subscriberA.subscribe('news', function(params) {
  console.log(`subscriberA gets the news: ${params.title}`);
});

subscriberB.subscribe('news', function(params) {
  console.log(`subscriberB gets the news: ${params.title}`);
});

const publisherA = new Publisher('weather', pub);
const publisherB = new Publisher('news', pub);

publisherA.notify({
  temp: "20 ℃"
});

publisherB.asyncNotify({
  title: "Breaking news"
},2000);