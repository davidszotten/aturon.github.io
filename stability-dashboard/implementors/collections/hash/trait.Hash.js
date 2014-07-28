(function() {var implementors = {};
implementors['semver'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;__S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;__S&gt; for <a class='type' href='semver/type.Identifier.html' title='semver::Identifier'>Identifier</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt; for <a class='struct' href='semver/struct.Version.html' title='semver::Version'>Version</a>",];
implementors['glob'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a> for <a class='struct' href='glob/struct.Pattern.html' title='glob::Pattern'>Pattern</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a> for <a class='struct' href='glob/struct.MatchOptions.html' title='glob::MatchOptions'>MatchOptions</a>",];
implementors['uuid'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt; for <a class='struct' href='uuid/struct.Uuid.html' title='uuid::Uuid'>Uuid</a>",];
implementors['test'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a> for <a class='type' href='test/type.TestName.html' title='test::TestName'>TestName</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a> for <a class='struct' href='test/struct.TestDesc.html' title='test::TestDesc'>TestDesc</a>",];
implementors['url'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt; for <a class='struct' href='url/struct.Url.html' title='url::Url'>Url</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt; for <a class='struct' href='url/struct.Path.html' title='url::Path'>Path</a>",];
implementors['rustrt'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;S: <a class='trait' href='collections/hash/trait.Writer.html' title='collections::hash::Writer'>Writer</a>&gt; <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt; for <a class='struct' href='rustrt/c_str/struct.CString.html' title='rustrt::c_str::CString'>CString</a>",];
implementors['collections'] = [];
implementors['rustdoc'] = ["<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a> for <a class='type' href='rustdoc/clean/type.Primitive.html' title='rustdoc::clean::Primitive'>Primitive</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
