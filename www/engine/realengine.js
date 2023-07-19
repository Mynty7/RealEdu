export default class REALEngine {
	static getnotes()
	{
		// so basically the notes are kept in localStorage
		// as JSON objects. We can parse them for use
		const notes = JSON.parse(localStorage.getItem("notepad") || "[]");
		return notes.sort((a, b) => { return new Date(a.updated) > new Date(b.updated) ? -1 : 1});
	}

	static savenote(a){
		const notes = REALEngine.getnotes();
		const existing = notes.find(note => note.id == notetosave.id);

		if(existing){
			existing.getItem = a.title;
			existing.body = a.body;
			existing.updated = new Date().toISOString();
		}else{
			// Generate random id for note ranging to 100
			a.id = Math.floor(Math.random() * 100);
			a.updated = new Date().toISOString();
			notes.push(a);
			localStorage.setItem("notepad", JSON.stringify(notes));
		}
	}

	static deletenote(id){
		const notes = REALEngine.getnotes();
		const newnotes = notes.filter(note => note.id != id);

		localStorage.setItem("notepad", JSON.stringify(newnotes));
	}
}
