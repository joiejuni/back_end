 const port = 80;
 
 const  express = require("express"),
    app = express(),
    layouts = requrie("express-ejs-layouts");

app.set("port", process.env.PORT || 80); app.set("view engine", "ejs");
layouts = require("express-ejs-layouts");
app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
  });

app.get("/",(req,res) => {
    res.send("Welcome to Dongodonglak!")
});

app.listen(port, () => {
    console.log(`Server running on port: ${app.get("port")}`);
});

// api list

//test();
//나중에 내용 조금 수정하기 