package model

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Name string
}

type ToDo struct {
	ID       int
	Author   User
	Title    string
	Done     bool
	Contents string
}
