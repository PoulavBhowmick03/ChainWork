import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CreateGig = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Create a New Gig</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-2">Gig Title</label>
          <Input id="title" placeholder="Enter gig title" />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea id="description" className="w-full p-2 border rounded" rows={4} placeholder="Describe your gig"></textarea>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2">Price (ETH)</label>
          <Input id="price" type="number" step="0.01" placeholder="Enter price in ETH" />
        </div>
        <div>
          <label htmlFor="category" className="block mb-2">Category</label>
          <select id="category" className="w-full p-2 border rounded">
            <option>Web Development</option>
            <option>Graphic Design</option>
            <option>Writing & Translation</option>
            <option>Digital Marketing</option>
          </select>
        </div>
        <Button type="submit">Create Gig</Button>
      </form>
    </div>
  );
  export default CreateGig;