Andreas Hadjigeorgiou
ahh2131
UI HW 1

My application is built using React JS + webpack, so all my js files
are bundled in bundle.js. You can run my app by simply dragging the
index.html file into a browser. Even though it is bundled up, you
can see the neatly organized javascript in the src/app/components
folder. This javascript consists of react classes, which render the
DOM for the search form, each field, results, and each track. 

Webpack takes all the dependencies as well as my code and bundles
it into one javascript file, making it easy to deploy and run.

CSS is found under styles, organized by major aspects of the app.


Design Decisions

I chose to make it clear that there was a search mechanism by
allowing the user to see one field, which is clearly labeled
as a search for artist field.

I put this field in the center of the viewport, in a banner that
subtly drew attention. I provided an example as a placeholder,
and the label above the form field, so that the user can always
see what they are typing for.

I made it clear that there were advanced options by adding an
advanced link next to the for field, as an a tag.

I made the button a bright color that says "SEARCH", to make it
clear what the goal of the field was. At first glance, you would
read the "Spotify" text and the "Search" text, and immediately
understand what the goal of the site was.

Furthermore, I changed the
cursor to a pointer, and added an on hover color transition so that
the user feels like they are going to press a button. The all caps,
as well as the increased character spacing, allows the button
to be more readable.

Pressing the advanced button opens up more fields, which are all
consistent in styling and in content. It is clear what each field
requires, and the user can fill out as many field as they want
and search for their track. This gives the user many freedoms, as
they may not know all the details of their track. This satisfied the
aesthetic and minimalist design heuristic, as well as the consistency
heuristic, as I give enough information so that the user knows what to
do, and make sure each field not only looks the same, but provides
the same kind of information.

Furthermore, I persist the artist name between the two forms, so
that the user does not have to retype them. If a user wants to do
a more advanced search, the artist name will remain in the new artist
field, and the user can continue to the other ones. Each placeholder
contains instructions on what needs to be inputted in the field. All
these attributes satisfy the flexibility and efficiency of use heuristic.
The user never has to input a field he has already filled out, and the
easy traversal between each form makes it simple for the user to search
the way he wants. The help and documentation heuristic is also satisfied
with the text in each placeholder, reminding the user what needs to be
inputted.

After searching, tracks appear below the search bar, and the form remains
there so that the user can specify more conditions if they wish to.
This satisfied the user control and freedom heuristic, as the user retains
the ability to traverse between listening to music and searching for it.
Each track
displays the album cover, followed by the track name and artist name, and
finally a player in order to hear a preview. The track name is the most
important, since that is what the user is looking for, so it is the most
prominent piece. Each audio track has appropriate controls for the user.
Names that are too long are sliced so that the UI remains consistent for
every track, satisfying the consistency and standards heuristic.

Finally, there is a next button and a previous button, which allows the user
to see more results. These only appear when there are more results, as to not
confuse the user. This satisfies the user control and freedom heuristic, as well
as error prevention, because it does not let the user press next or previous
if there are no songs, which would result in an error. Also, the buttons
bring the user back to the top of the page, so they can scroll down the tracks
in order, and don't have to scroll back up.
