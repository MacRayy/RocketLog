## Initial Plan

<!--
Use this section to write down your intended plan for the test.
-->
</br>

- Add eslint rules and prettier to have a consistent code style and formatting
- Check SpaceX API and see what data is available, print some data to the console
- Start creating a page and a layout component to display the data
- Create a `Card` component to display a launch's data in the grid layout
- Add a `Select` to filter the nationality of the payloads
- Implement pagination
- Develop the details page
- Add unit, component and E2E tests

## Comments Whilst Developing

<!--
Use this section to not down anything whilst developing e.g. challenging bits of work, reasons for a certain approach, reason for adding a specific package etc
-->
</br>

- I have decided to add prettier and a few more eslint rules to have a consistent code style and formatting.
- I have checked the SpaceX API and after playing with the endpoints I realised that I'll soon need some kind of type generation for the data I'll be fetching. So I have decided to use `quicktype` to generate types. This turned out to be a quick and easy way to generate types, I've never used it before.
- It was kind of complicated to get the right info first. I tried to create a complex query that get the launches and the payloads in one go. But I realised that it was too complex. So I decided to make two separate queries. One for the launches and another for the payloads. However when I started to implement the pagination I realised that it would have been better to use the `queryLaunches` instead of `getLaunches` to get the launches and the payloads in one go and also use this for the pagination.
- Added component test to `Card` component.
- Unit tested the `filterLaunchesByNationality` function.
- Added test to the `App.tsx`, tested the paths and navigation.
- Added a very small E2E test to check if the app is loading and if the `Card` component is being rendered and check the navigation to the details page. I used playwright for this test. This was also new to me because I rarely have to write e2e tests.
- In a real word app I would also write more tests to other functions and components, but I believe that these tests are enough for this test.
- Lastly added some very basic styles for mobile view for the layouts.

## Describe the user story and your implementation

<!--
Use this section to describe your implementation for each user story given


-   As a user, when I open the application I would like to see a grid view of launches as per the design.
-   As a user, I can use a dropdown filter to filter the launches based on the launch payload nationality.
-   As a user, when I click on a grid list item, I can view summary details for the launch that I have clicked on as per the design.
-   As a user, when I am on the details view of an item, I should be able to navigate back to the list.
-->
</br>

1. For the first user story I have created a `Card` component that displays the launch data in a CSS grid layout. I used the RTK query to fetch the data from the SpaceX API. Leter I added frontend pagination to the grid layout, which displays 8 cards per page. I believe it's not the best performing solutuon because I'm fetching all the data from the API and then paginating it in the frontend. For the pagination I've used the `rc-pagination` library.
2. For the second user story I have added a `Select` component to filter the launches by the nationality of the payloads. For the Select component I have used the `react-select` library, which is a very small and easy to use library. I have also added a `filterLaunchesByNationality` function that filters the launches.
3. For the third user story I have created a details page that displays the launch data in a more detailed way.
4. For the fourth user story I have added a back button to the details page that navigates back to the list.
For the navigation I have used the `react-router-dom` library, which is a very popular library for navigation in React applications. For the navigation I added the lunch id to the URL so I can navigate to the details page directly.

## What would you have done differently if you had more time

<!--
Use this section to let us know what you would have added/created/implemented if you had more time or if this was to be a production ready application
-->

- I would add proper loading state and better error handling to the UI.
- I would add `Typograhy` components to have a more consistent typography across the app.
- I would also use a color scheme to have a more consistent color usage. Use css variables to store the colors.
- I would use the `queryLaunches` instead of `getLaunches` to get the launches and the payloads in one go and also use this for the pagination.
- I would move the two pages layout's to `Layout` components in case it is needed to be reused in the future.
- I would also add the pagination location to the URL so we can navigate to a specific page.
- If this were a production ready application I would add storybook for creating and testing components in isolation. And I also connect the storybook with Chromatic to have a visual regression testing (instead of snapshot testing).
- I would create a more atomic `Card` component to have a more reusable component. The current `Card` component is too specific to the `Launch` data. I think we could have a `Card` component that receives a `children` prop and renders it in the card. And we could have a `LaunchCard` component that uses the `Card` component and renders the `Launch` data.
