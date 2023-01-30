# book-recrod-managment

This will be the application for managment of the books or you can say api

# endpoints

## /user

only 2 methods for now
POST:Create a new user
GET:get all the list of users

## /user/{id}

unique id for each users
GET: Get a user by their ID
PUT: update a user by ID
Delete: Delete a user by their ID
(before deletion check weather the user have returned all the books or the fine is remaining)

## /user/subscription-detail/{id}

GET:get the user sub. details 1) date of subscriotion 2) valid till? 3) fine if any

## /books

GEt : get all the books
POSt: add new book

## /books/{id}

GET: get book by id
PUT: update book by id

## /books/issued

GET: get all the issued books

## /books/issued/withfine

GET:all issued books with fine

## Subscription type

basic (3 months)
standard(6m)
premium(12m)

if user has an issued book and the issued book is to be returned at given date and user misses it (with subscription)fine 50/-

(with no or when subscription ends) 150/-
