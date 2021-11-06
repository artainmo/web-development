import courses from './courses'
import studyGroups from './studyGroups'

type Course = typeof courses[0];
type StudyGroup = typeof studyGroups[0];
type SearchEventsOptions = { query: string | number, eventType: 'courses' | 'groups' };

function searchEvents(options: SearchEventsOptions): (Course | StudyGroup)[] {
  let events: Course | StudyGroup;

  if (options.eventType === 'courses') {
    events = Course;
  } else {
    events = StudyGroup;
  }
  return events.filter(event => {
    if (typeof options.query === 'number') {
      return event.id === options.query;
    } else {
      return event.includes('query');
    }
  })
}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

searchResults = searchEvents({query: 1, eventType: 'courses'});
console.log(searchResults);

enroll(searchResults[0]);

console.log(enrolledEvents);
