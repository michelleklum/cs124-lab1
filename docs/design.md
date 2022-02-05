# CS 124 Lab 1 Design Document

## Final App: Home Page

As our app currently stands, this is how the home page for an existing user would look. We decided to give users the ability to create multiple lists, since users might want to sort tasks into separate lists based on what category of tasks they belong to (for example, Homework versus Shopping).

The circular plus icon in the bottom right corner allows users to create a new list of tasks. We decided it wasn't necessary for the plus icon to be accompanied by any instructive text because during usability testing, participants didn't have trouble comprehending the purpose of a plus icon without text, as we explain further in the usability testing section below.

In order to save space, we decided not to display the search bar in a fixed position just under the top navigation bar. Instead, upon being tapped, the magnifying glass icon in the top right corner expands to a search bar that fills the entire top navigation bar. This happens in apps such as Facebook, Twitter, and Instagram, so we thought that users would be accustomed to such behavior. Search results will contain lists whose names match the search, and also tasks whose descriptions match the search. During usability testing, this two-layer searching ability was something users requested.

<img src="home_page_final.png" alt="Home Page Lab 1 Final Version" width="200px">

<img src="home_page_search_final.png" alt="Home Page Search Lab 1 Final Version" width="200px">

<img src="home_page_search_in_progress_final.png" alt="Home Page Search In Progress Lab 1 Final Version" width="200px">

Users should tap a card for an individual list in order to get to the Single List Page, which will display all the tasks for that list.

Users should swipe from right to left on the cards for individual lists in order to reveal the pencil icon and the trash can icon for editing the list and deleting the list, respectively. We believed this swiping motion would be intuitive because it was something users are already accustomed to from their interactions with other mobile apps, and that hypothesis was confirmed by our user testing.

<img src="home_page_edit_icons_final.png" alt="Home Page Edit Icons Lab 1 Final Version" width="200px">

## Final App: Create List Page / Edit List Page

When a user taps the plus button on the Home Page, they will be brought to the Create List Page, where they can enter a list name into the input box in the top navigation bar, and also select an icon to represent their list. We wanted to give users a way to customize the appearances of their lists to their liking. The X icon cancels the action of creating a new list, while the checkmark icon saves the newly created list. This is similar to behavior seen in apps such as Google Calendar, when users edit Calendar Events on mobile devices. The checkmark icon is only enabled after the user has named their list and given it a representative icon.

<img src="create_list_page_final.png" alt="Create List Page Lab 1 Final Version" width="200px">

<img src="create_list_page_in_progress_final.png" alt="Create List Page In Progress Lab 1 Final Version" width="200px">

## Final App: Single List Page

When a user taps the card for an individual list on the Home Page, the user will be brought to the Single List Page, which displays all the tasks in that list, sorted in chronological order, as well as a search bar for filtering through the tasks in that list. We thought it would be helpful to have the option to attach dates to tasks in case users want to perform specific tasks at specific times / dates. We also thought the search functionality would be helpful in case there are many tasks in a single list.

The circular plus icon in the bottom right corner of the Single List Page serves a similar purpose to the plus icon on the Home Page. But instead of creating a new list, the plus icon now enables users to add a new task.

<img src="single_list_page_final.png" alt="Single List Page Lab 1 Final Version" width="200px">

Users can tap the 3 horizontal dots in the top right corner of the Single List Page to enter the Single List Page's Menu Mode, where they can customize the list appearance by going to the Edit List Page (which is basically the same as the Create List Page), hide / show completed tasks, delete completed tasks, delete all tasks, or delete the list.

Initially, we had the delete options appear directly on the Single List Page; they were not hidden in this menu mode. However, during usability testing, participants remarked that having the "Add New Task" and "Delete All Tasks" buttons so close to each other would lead to unwanted accidental deletes. That's why we decided to add this extra layer of tapping the 3 dots to enter the Single List Page Menu Mode.

Similarly, we initially had our "Hide completed tasks" filter appear directly on the Single List Page. However, that took up a lot of space, so we decided to put it in this menu so that we could display more tasks onscreen.

<img src="single_list_page_menu_mode_final.png" alt="Single List Page Menu Mode Lab 1 Final Version" width="200px">

## Final App: View Task Page

When a user taps the card for a task on the Single List Page, they are brought to the View Task Page, where they can view more details about that task, such as location and additional notes, which aren't visible on the Single List Page of all tasks.

Users can tap the X icon to return to the Single List Page of all tasks in the list. Or, alternatively, they can tap the pencil icon to go to the Edit Task Page. This was inspired by Google Calendar, which has a similar mobile user flow. The two-step user flow prevents users from accidentally editing a task when all they want to do is just to view that task.

<img src="view_task_page_final.png" alt="View Task Page Lab 1 Final Version" width="200px">

## Final App: Edit Task Page

When a user taps the pencil icon on the View Task Page, they are brought to the Edit Task Page, where they can edit the task name in the input box at the top of the page. They can also change the task date and time using dropdown menus, as well as set the location of the task, add any additional notes, and/or mark the task as completed / not completed. Clicking the trash can icon at the bottom of the Edit Task Page will delete the task.

<img src="edit_task_page_final.png" alt="Edit Task Page Lab 1 Final Version" width="200px">

## Alternate Designs: Home Page and Single List Page Initial Brainstorming

<img src="alt_initial_brainstorming_whiteboard.JPG" alt="Home Page and Single List Page Initial Brainstorming Whiteboard Drawings" width="200px">

## Alternate Designs: Home Page

alternative designs you considered, including images

<img src="alt_home_page_v1.png" alt="Home Page Lab 1 Version 1" width="200px">

Uses Karla instead of Open Sans. Uses a different color palette.

<img src="alt_home_page_v2.JPEG" alt="Home Page Lab 1 Version 2" width="200px">

## Alternate Designs: Single List Page

<img src="alt_single_list_page_v1.png" alt="Single List Page Lab 1 Version 1" width="200px">

## Usability Testing

any user testing you did

## Usability Testing: Home Page

<img src="user_test_home_page_plus.png" alt="User Testing Home Page Plus Icon Only" width="200px">

Users understood that the plus icon was for creating a new list; no need for text explaining the plus icon

## Usability Testing: Home Page New Version

<img src="user_test_home_page_new_version.png" alt="User Testing Home Page New Version" width="200px">

Users didn't think the "Create New List" text was necessary; they understood it from the plus icon before.

They understood that if you tap an individual list, you should see more of the list (i.e., tasks contained in the list).

They understood the swiping thing would reveal the edit and trash icons. Mentioned other apps use swiping.

They understood the pencil icon would bring them to a page to edit the list.

They understood the trash icon would delete the list.

## Usability Testing: Home Page Search

<img src="user_test_home_page_search.png" alt="User Testing Home Page Search" width="200px">

Users want to see all the list items before searching so it's like the search filters.

## Usability Testing: Single List Page

<img src="user_test_single_list_page.png" alt="User Testing Single List Page" width="200px">

Users knew what the home icon meant, but preferred a back icon more reflective of the arrow icon that took them from the Home Page to this Single List Page.

Users didn't like that the Add New Task and Delete Tasks buttons were right next to each other -> easy to make a mistake.

## Usability Testing: Edit Task Page

<img src="user_test_edit_task_page.png" alt="User Testing Edit Task Page" width="200px">

Users didn't see a way to get out of this page without deleting the task they were trying to edit. So we decided to add an X icon and a checkmark to do BLANK to get back to the Single List Page

## Challenges

challenges you faced

## Wins

parts of the design you're most proud of
