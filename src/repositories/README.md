# Repository

Consider a repository as a storage of some data that can be managed (read/write).

This package is intended for linking modules to each other.
For example `authentication` module requires `AuthenticationRepository` to be implemented,
so it is possible to tell angular to use either *http-based* auth or *firebase-based* auth. 

This way a module gets decoupled from a particular repository configuration (apiKey etc). 

Also for the sake of unit testing a mock implementation of a repo can be used. 

Try to keep a repository as much stateless as possible, 
meaning it should not rely on its internal state when managing data. 
