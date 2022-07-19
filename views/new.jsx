const React = require('react')
const Default = require('./layouts/Default')

function New () {
return (
    <Default>
    <h2>Add a new bread</h2>
        <form action="/breads" method="POST">
        <div className="form-group mb-2 mt-3">
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name="name"
        id="name"
        required
        /></div>
        <br />
        <div className="form-group mb-2 mt-3">
        <label htmlFor="image">Image</label>
        <input
        type="text"
        name="image"
        id="image" />
        <br />
        </div>
        <div className="form-check mb-3">
        <label htmlFor="hasGluten"> Has Gluten?</label>
        <input
        type="checkbox"
        name="hasGluten"
        id="hasGluten"
        defaultChecked
        />
        </div>
        <br />
        <div className="form-check mb-3">
        <input type="submit" />     
        </div>
        </form>
        <div className="backButton">
        <a href="/breads"><button className="btn btn-primary">Go back to the index</button></a>
        </div>
    </Default>
    )
}

module.exports = New
