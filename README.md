# PE04_CS628_ReDoing
# Input
 User input is accepted by the application via a web form allowing addition of city information.  Required fields are city name, nation, and population.  The app lets users browse a list of current cities or get thorough information on a certain city.

 # Process
 The application generates a new city object including the supplied information upon form submission, hence processing the input.  The program keeps a state holding an array of city objects.  A new city gets a unique ID depending on the present array length.  The application then modifies the state to add the new city, hence causing a re-render of the component to show the revised city list.

 # Output
 The user interface shows the program's output as a list of cities with their information for users to view.  Selecting a city gives the user particular information such the city name, nation, and population, hence improving the whole user experience.
