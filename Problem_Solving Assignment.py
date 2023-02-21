'''
Hiding some data is known as encryption. When plain text is encrypted it 
becomes unreadable and is known as ciphertext. In a Substitution cipher, 
any character of plain text from the given fixed set of characters is substituted
by some other character from the same set depending on a key. 
For example with a shift of 1, A would be replaced by B, B would become C, and so on.
'''


'''
Question : 

Data Encryption System: 
Rahul wants to send encoded messages to his friend Ram.
Develop an algorithm to encode all the digits, special characters,
lower and upper case alphabets.
'''

def encoded_message(message,key):
    '''
       Description : This function is used to encode the message using a key
       Input : message, key
       Returns : encoded message
    '''
    encoded = ''.join(chr(ord(i)+key) for i in message)
    return encoded

def decoded_message(message,key):
    '''
       Description : This function is used to decode the message using a key
       Input : encoded message, key
       Returns : Plain text
    '''
    decoded = ''.join(chr(ord(i)-key) for i in message)
    return decoded

message = "Hello Samad! This is an encoded message. You are number 1 mentor!!"
key = 3

encode = encoded_message(message,key)
decode = decoded_message(encode,key)
print("Encoded message : ",encode)
print("Decoded message : ",decode)




