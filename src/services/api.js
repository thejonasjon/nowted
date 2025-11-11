import { supabase } from "./supabaseClient";

export async function getFolders() {
  const { data, error } = await supabase
  .from("folder")
  .select(`
    id,
    name,
    favorite,
    archived,
    trashed,
    created_at,
    user_id,
    note (
      id,
      title,
      description,
      favorite,
      archived,
      trashed,
      created_at
    )
  `);

  if (error) {
    console.error("Error fetching folders with notes:", error.message);
    throw error;
  }

  return data;
}


// Get all recents notes
export async function getRecentNotes() {
    const {data, error} = await supabase
        .from("note")
        .select('*')
        .order("created_at", {ascending: false})
        .limit(3)

    if(error){
        console.log("Error", error)
        throw error;
    };

    return data
}

// Get list of archived or trashed or favorite notes
const ALLOWED_TAGS = ["archived", "trashed", "favorite"];

export async function getTags(tag) {
  if (!ALLOWED_TAGS.includes(tag)) {
    throw new Error(`Invalid tag: ${tag}. Must be one of ${ALLOWED_TAGS.join(", ")}`);
  }

  const { data, error } = await supabase
    .from("note")
    .select("*")
    .eq(tag, true);

  if (error) {
    console.error("Error fetching notes by tag:", error);
    throw error;
  }

  return data;
}