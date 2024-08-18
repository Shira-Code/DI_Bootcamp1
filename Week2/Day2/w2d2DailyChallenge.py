# Instructions :
# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

# The Pagination class will accept 2 parameters:

# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)


# The Pagination class will have a few methods:

# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)

# Here’s a continuation of the example above using nextPage and lastPage:

# alphabetList = list("abcdefghijklmnopqrstuvwxyz")

# p = Pagination(alphabetList, 4)

# p.getVisibleItems() 
# # ["a", "b", "c", "d"]

# p.nextPage()

# p.getVisibleItems()
# # ["e", "f", "g", "h"]

# p.lastPage()

# p.getVisibleItems()
# # ["y", "z"]


# Notes

# The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
# The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
# Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
# If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

# class Pagination:
#     def __init__(self, items=None, page_size=10):
#         self.items = items if items is not None else []
#         self.page_size = page_size
#         self.current_page = 1

#     def get_total_pages(self):
       
#         return (len(self.items) + self.page_size - 1) // self.page_size

#     def get_visible_items(self):
       
#         start_index = (self.current_page - 1) * self.page_size
#         end_index = min(start_index + self.page_size, len(self.items))
#         return self.items[start_index:end_index]

#     def prev_page(self):
       
#         if self.current_page > 1:
#             self.current_page -= 1
#         return self.get_visible_items()

#     def next_page(self):
        
#         if self.current_page < self.get_total_pages():
#             self.current_page += 1
#         return self.get_visible_items()

#     def first_page(self):
       
#         self.current_page = 1
#         return self.get_visible_items()

#     def last_page(self):
        
#         self.current_page = self.get_total_pages()
#         return self.get_visible_items()

#     def go_to_page(self, page_num):
       
#         if 1 <= page_num <= self.get_total_pages():
#             self.current_page = page_num
#         else:
#             raise ValueError("Page number out of range")
#         return self.get_visible_items()


# if __name__ == "__main__":
#     alphabet_list = list("abcdefghijklmnopqrstuvwxyz")
#     p = Pagination(alphabet_list, 4)

#     print("Initial page:", p.get_visible_items())
#     print("Next page:", p.next_page())
#     print("Next page:", p.next_page())
#     print("Previous page:", p.prev_page())
#     print("First page:", p.first_page())
#     print("Last page:", p.last_page())
#     print("Go to page 3:", p.go_to_page(3))
#     print("Go to page 1:", p.go_to_page(1))