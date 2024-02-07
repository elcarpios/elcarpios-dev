<script lang="ts">
  import PaperPlane from "@assets/svg/paper-plane.svg?raw";

  let formSuccess: boolean;
  let formErrors: string[] = [];

  async function submitHandler(e: SubmitEvent) {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form as HTMLFormElement);
    const data = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    }).then((data) => data.json());

    formSuccess = data.success;
    formErrors = data.errors;

    formSuccess && form.reset();    
  }
</script>

<div id="form">
  {#if formSuccess}
  <div class="flex gap-x-1 flex-wrap text-lg text-gray-600 font-light items-center justify-center border py-4 px-6 rounded-lg dark:text-gray-300">
    <span class="w-5 h-5 mr-1">
      {@html PaperPlane}
    </span>
    <h2>Thanks!</h2>
    <h3>Your message has been sent!</h3>
  </div>
  {:else}
  <form on:submit={submitHandler} class="flex flex-col gap-y-5">
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div class="flex flex-col gap-y-2">
        <label
          for="name"
          class="block text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your name</label>
        <input
          name="name"
          type="text"
          class:border-red-700={formErrors.includes('name')}
          class:dark:border-red-700={formErrors.includes('name')}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="John Doe"
        />
      </div>
      <div class="flex flex-col gap-y-2">
        <label
          for="email"
          class="block text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your contact email</label>
        <input
          name="email"
          type="email"
          class:border-red-700={formErrors.includes('email')}
          class:dark:border-red-700={formErrors.includes('email')}
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="username@email.com"
          
        />
      </div>
    </div>
    <div class="flex flex-col gap-y-2">
      <label
        for="message"
        class="block text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your comment</label>
      <textarea
        name="message"
        rows={6}
        class:border-red-700={formErrors.includes('message')}
        class:dark:border-red-700={formErrors.includes('message')}
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Hello Victor! "></textarea>
    </div>
    <button
      type="submit"
      class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >Send message</button>
  </form>
  {/if}
</div>