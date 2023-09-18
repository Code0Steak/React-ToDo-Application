package main

import (
	"github.com/Code0Steak/React-To-Do-Application/initializers"
	model "github.com/Code0Steak/React-To-Do-Application/models"
)

func init() {
	initializers.ConnectToDB()
}

func main() {
	initializers.DB.AutoMigrate(&model.User{})
}
