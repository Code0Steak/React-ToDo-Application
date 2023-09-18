package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type ToDo struct {
	ID       int    `json:"id"`
	Title    string `json:"title"`
	Done     bool   `json:"done"`
	Contents string `json:"contents"`
}

// func init() {
// 	initializers.ConnectToDB()
// }

func main() {

	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	todos := make([]ToDo, 0, 5)
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("OK")
	})

	//Add New Todo API and  Handler
	app.Post("/api/todos", func(c *fiber.Ctx) error {
		todo := &ToDo{}

		if err := c.BodyParser(todo); err != nil {
			return err
		}

		todo.ID = len(todos) + 1

		todos = append(todos, *todo)

		return c.JSON(todos)

	})

	//Update Todo
	app.Patch("api/todos/:id/done", func(c *fiber.Ctx) error {
		id, err := c.ParamsInt("id")

		if err != nil {
			return c.Status(401).SendString("Invalid ID")
		}

		//update todo as done
		for i := 0; i < len(todos); i++ {
			if todos[i].ID == id {
				todos[i].Done = !todos[i].Done
				break
			}
		}

		return c.JSON(todos)

	})

	//Get all Todos
	app.Get("api/todos", func(c *fiber.Ctx) error {
		return c.JSON(todos)
	})

	//the 'Listen' method starts up a web-server
	log.Fatal(app.Listen(":4000"))

}
