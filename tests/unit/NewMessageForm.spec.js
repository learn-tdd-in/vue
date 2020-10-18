import { mount } from "@vue/test-utils";
import NewMessageForm from "@/components/NewMessageForm";

describe("NewMessageForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(NewMessageForm);
  });

  describe("clicking the send button", () => {
    beforeEach(() => {
      wrapper.find("[data-test='messageText']").setValue("New message");

      wrapper.find("[data-test='sendButton']").trigger("click");
    });

    it("clears the text field", () => {
      const { value } = wrapper.find("[data-test='messageText']").element;
      expect(value).toEqual("");
    });

    it("emits the 'send' event", () => {
      expect(wrapper.emitted().send[0]).toEqual(["New message"]);
    });
  });
});
