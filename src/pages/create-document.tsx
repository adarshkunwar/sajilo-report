import { useState } from "react";
import Editor from "../components/create-documents/section/editor/editor";
import Preview from "../components/create-documents/section/preview/preview";
import { Tsection } from "../types/create-document";

export default function CreateDocument() {
  const [section, setSection] = useState<Tsection[]>([
    {
      content: [
        { type: "heading", value: "Abstract" },
        { type: "paragraph", value: "Add your content here" },
      ],
    },
  ]);

  return (
    <div className="grid h-screen grid-cols-12">
      {/* Editor Section */}
      <div className="col-span-4 h-full overflow-y-auto bg-gray-100 p-4">
        <Editor section={section} setSection={setSection} />
      </div>

      {/* Preview Section */}
      <div className="col-span-8 h-full overflow-y-auto bg-white p-4">
        <Preview section={section} />
      </div>
    </div>
  );
}
