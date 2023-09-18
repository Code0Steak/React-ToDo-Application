package initializers

import (
	"gorm.io/driver/sqlite" // Sqlite driver based on CGO
	// Pure go SQLite driver, checkout https://github.com/glebarez/sqlite for details
	"log"

	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectToDB() {
	DB, err := gorm.Open(sqlite.Open("gorm.db"), &gorm.Config{}) //gorm.db database will be created
	if err != nil {
		log.Fatal("Failed to connect to DB", DB, err)
	}

}
