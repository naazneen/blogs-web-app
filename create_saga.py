
new_file = input("Enter API name (separated with underscores): ")
capital_name = ""
small_name = ""
capital_name = new_file.upper()
char_i = 0
while char_i < len(new_file):
    if new_file[char_i] != "_":
        small_name += new_file[char_i]
        char_i += 1
    else:
        small_name += new_file[char_i+1].upper()
        char_i += 2

print("capital name: ", capital_name)
print("small name: ", small_name)

# add saga files
files = [('action', 'Action.js'), ('api', 'Api.js'),
         ('reducer', 'Reducer.js'), ('saga', 'Saga.js')]
for file in files:
    with open('src/'+file[0]+'/addToCart'+file[1], 'r') as f:
        content = f.read()

    content = content.replace("ADD_TO_CART", capital_name)
    content = content.replace("addToCart", small_name)

    with open('src/'+file[0]+'/'+small_name+file[1], "w") as f:
        f.write(content)
        f.close()

# update reducer.js
with open('src/reducer.js', 'r') as f:
    content = f.readlines()

for line_i in range(len(content)):
    if content[line_i].startswith('export'):
        content[line_i-1] = content[line_i-1][:-1]
        content[line_i] = "import {} from './reducer/{}Reducer'\n\n".format(
            small_name, small_name) + content[line_i]
    if content[line_i].startswith('})'):
        content[line_i] = "{},\n".format(small_name) + content[line_i]

# update saga.js
with open('src/reducer.js', 'w') as f:
    for line in content:
        f.write(line)


with open('src/store.js', 'r') as f:
    content = f.readlines()

for line_i in range(len(content)):
    if content[line_i].startswith('const sagaMiddleware'):
        content[line_i-1] = content[line_i-1][:-1]
        content[line_i] = "import {}Saga from './saga/{}Saga'\n\n".format(
            small_name, small_name) + content[line_i]
    if content[line_i].startswith('export default store'):
        content[line_i-1] = content[line_i-1][:-1]
        content[line_i] = "sagaMiddleware.run({}Saga)\n\n".format(
            small_name) + content[line_i]

with open('src/store.js', 'w') as f:
    for line in content:
        f.write(line)
